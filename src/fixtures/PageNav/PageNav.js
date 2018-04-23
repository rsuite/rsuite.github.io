import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { on } from 'dom-lib';

import createNavItems from './util/createNavItems';
import pureUpdate from './util/pureUpdate';

const itemHeight = 34;

class PageNav extends Component {
  static propTypes = {
    offset: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    minLevel: PropTypes.number,
    maxLevel: PropTypes.number,
    width: PropTypes.number,
    scrollBar: PropTypes.string,
    // coverId: PropTypes.bool,
    fixed: PropTypes.bool,
    showOrderNumber: PropTypes.bool
  };
  static defaultProps = {
    offset: {
      top: 100,
      left: 30
    },
    minLevel: 2,
    maxLevel: 4,
    scrollBar: 'right',
    coverId: true,
    show: true,
    fixed: true,
    showOrderNumber: true
  };
  static contextTypes = {
    content: PropTypes.any
  };
  static childContextTypes = {
    scrollBar: PropTypes.string,
    activeAnchor: PropTypes.string,
    showOrderNumber: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {
      anchors: []
    };
  }
  getChildContext() {
    const { scrollBar, fixed, showOrderNumber } = this.props;
    const { anchors, activeAnchor = fixed ? anchors[0] : '' } = this.state;
    return {
      scrollBar,
      activeAnchor,
      showOrderNumber
    };
  }
  shouldComponentUpdate = pureUpdate.bind(this);
  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.context.content !== nextContext.content) {
      this.handelContentMount(nextContext.content);
    }
  }
  componentWillUnmount() {
    if (this.scrollListener) {
      this.scrollListener.off();
    }

    if (this.resizeListener) {
      this.resizeListener.off();
    }
  }

  setScrollListener(ref, anchors) {
    this.scrollWrap = ref;
    const elList = anchors.map(anchor => document.getElementById(anchor));
    if (this.scrollListener) {
      this.scrollListener.off();
    }

    const handleScroll = () => {
      let index = 0;
      const { activeAnchor } = this.state;
      elList.find((el, i) => {
        const position = el.getBoundingClientRect();
        index = i;
        return position.top > 100;
      });
      const nextAnchor = anchors[index - 1] || anchors[0];

      if (nextAnchor !== activeAnchor) {
        this.setState({
          activeAnchor: nextAnchor
        });

        const nav = document.querySelector(`a[href='#${activeAnchor}']`);
        const pageNav = this.pageNav;

        if (nav && pageNav) {
          const navTop = nav.getBoundingClientRect().top - pageNav.getBoundingClientRect().top;
          const maxCount = parseInt(pageNav.clientHeight / nav.offsetHeight, 10);
          if (navTop + itemHeight * 2 > pageNav.clientHeight) {
            pageNav.scrollTop = pageNav.scrollTop + (maxCount - 1) * itemHeight;
          }
          if (navTop < 2 * itemHeight) {
            pageNav.scrollTop = pageNav.scrollTop - (maxCount - 1) * itemHeight;
          }
        }
      }
    };

    this.scrollListener = on(window, 'scroll', _.debounce(handleScroll, 100));
  }

  // 遍历所有标题
  traverseTitle(node, titleList, anchors) {
    const type = node.tagName;
    if (/^H[1-6]/.test(type)) {
      let title = node.innerText;
      node.id = title;

      let level = parseInt(type.replace('H', ''), 10);
      const { minLevel, maxLevel } = this.props;
      if (level >= minLevel && level <= maxLevel) {
        titleList.push({
          title,
          anchor: title,
          level
        });
        anchors.push(title);
      }
    } else {
      const { children } = node;
      for (let i = 0; i < children.length; i += 1) {
        this.traverseTitle(children[i], titleList, anchors);
      }
    }
  }

  handelContentMount(content) {
    const titleList = [];
    const anchors = [];
    const { children, minLevel, maxLevel, fixed } = this.props;
    if (!children) {
      this.traverseTitle(content, titleList, anchors);
      this.setState({
        anchors
      });
      const list = titleList.filter(item => item.level >= minLevel && item.level <= maxLevel);
      const navItems = createNavItems(list, 0);
      this.setState({
        navItems
      });
    } else {
      this.setState({
        navItems: this.renderNavItems()
      });
    }
    fixed && this.setScrollListener(content, anchors);
  }

  handelNavMount(nav) {
    if (!this.pageNav) {
      this.pageNav = nav;
    }
    if (this.resizeListener) {
      this.resizeListener.off();
    }
    const resizeListener = () => {
      this.pageNav.style.height = `${itemHeight *
        parseInt((innerHeight - this.pageNav.offsetTop) / itemHeight, 10)}px`;
    };

    this.resizeListener = on(window, 'rezise', _.debounce(resizeListener, 400));
    resizeListener();
  }

  renderNavItems() {
    let anchors = [];
    const { children, scrollBar = 'left' } = this.props;
    const { activeAnchor } = this.state;
    const navItems = React.Children.map(children, (item, i) => {
      anchors.push(item.props.anchor);
      return React.cloneElement(item, {
        index: `${i + 1}`,
        level: 1,
        activeAnchor,
        scrollBar,
        key: item.props.anchor
      });
    });
    this.setState({
      anchors
    });
    return navItems;
  }

  render() {
    const { offset, width, fixed } = this.props;
    const { navItems } = this.state;
    return (
      <div
        className="page-nav"
        style={{
          width: fixed ? width || 250 : width || '100%',
          position: fixed ? 'fixed' : 'relative',
          ...(fixed && offset)
        }}
        ref={ref => this.handelNavMount(ref)}
      >
        {navItems}
      </div>
    );
  }
}

export default PageNav;
