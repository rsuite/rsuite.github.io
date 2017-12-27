
import React from 'react';
import PropTypes from 'prop-types';

class ColorPanel extends React.Component {
  static propTypes = {
    colors: PropTypes.array
  }
  render() {
    const { colors } = this.props;

    return (
      <ul className="panel-color">
        {
          colors.map((item, index) => {
            let styles = {
              background: item.hex,
              color: (index > 4) ? '#fff' : '#575757'
            };
            return (
              <li key={index} data-index={index} style={styles}>{item.name}:{item.hex}</li>
            );
          })
        }
      </ul>
    );
  }
}

export default ColorPanel;