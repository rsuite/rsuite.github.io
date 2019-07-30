import React from 'react';
import Color from 'color';
import PropTypes from 'prop-types';
import { Icon, Popover, Whisper } from 'rsuite';

const speaker = (
  <Popover title="Contrast Ratio" style={{ width: 700 }}>
    <p>
      The latest accessibility guidelines (e.g.,
      <a
        href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"
        target="_blank"
      >
        {' '}
        WCAG 2.0 1.4.3)
      </a>{' '}
      require that text (and images of text) provide adequate contrast for
      people who have visual impairments. Contrast is measured using a{' '}
      <a href="https://www.w3.org/TR/WCAG20/#contrast-ratiodef" target="_blank">
        formula
      </a>{' '}
      that gives a ratio ranging from 1:1 (no contrast, e.g., black text on a
      black background) to 21:1 (maximum contrast, e.g., black text on a white
      background). Using this formula, the requirements are:
    </p>
    <ul>
      <li>
        <strong>3 : 1</strong> - minimum contrast for "large scale" text (18 pt
        or 14 pt bold, or larger) under WCAG 2.0 1.4.3 (Level AA)
      </li>
      <li>
        <strong>4.5 : 1</strong> - minimum contrast for regular sized text under
        WCAG 2.0 1.4.3 (Level AA)
      </li>
      <li>
        <strong>7 : 1</strong> - "enhanced" contrast for regular sized text
        under WCAG 2.0 1.4.6 (Level AAA)
      </li>
    </ul>
  </Popover>
);

class ColorPanel extends React.Component {
  static propTypes = {
    colors: PropTypes.array
  };
  render() {
    const { colors } = this.props;

    return (
      <table className="panel-color">
        <thead>
          <tr>
            <th>Color</th>
            <th>
              <Whisper placement={'top'} trigger="hover" speaker={speaker}>
                <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">
                  Ratio <Icon icon="question2" />
                </a>
              </Whisper>
            </th>
            <th>Noraml</th>
            <th>Large</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((item, index) => {
            const a = Color('#575757').contrast(Color(item.hex));
            const b = Color('#fff').contrast(Color(item.hex));
            const contrast = Math.max(a, b).toFixed(1);

            const styles = {
              background: item.hex,
              color: a > b ? '#575757' : '#fff'
            };

            let levelNoraml = '';
            let levelLarge = '';

            if (contrast >= 3) {
              levelLarge = 'AA';
            }

            if (contrast >= 4.5) {
              levelNoraml = 'AA';
            }

            if (contrast >= 7) {
              levelNoraml = 'AAA';
              levelLarge = 'AAA';
            }

            return (
              <tr key={index} data-index={index} style={styles}>
                <td>
                  {item.name}:{item.hex}
                </td>
                <td className="contrast">{contrast} : 1</td>
                <td>{levelNoraml}</td>
                <td style={{ fontWeight: 'bold' }}>{levelLarge}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ColorPanel;
