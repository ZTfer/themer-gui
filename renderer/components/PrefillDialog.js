import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Radio from './Radio';
import Emoji from './Emoji';
import {
  closeDialogs,
  prefillColorSetSelectionChange,
  prefillWithColorSet,
} from '../actions';
import { colors as colorsDefault } from 'themer-colors-default';
import { colors as colorsNightSky } from 'themer-colors-night-sky';
import { colors as colorsOne } from 'themer-colors-one';
import { colors as colorsPolarIce } from 'themer-colors-polar-ice';
import { colors as colorsLucid } from 'themer-colors-lucid';
import { colors as colorsFingerPaint } from 'themer-colors-finger-paint';
import { colors as colorsSolarized } from 'themer-colors-solarized';
import { colors as colorsGitHubUniverse } from 'themer-colors-github-universe';
import { colors as colorsNova } from 'themer-colors-nova';
import formCss from './FormDialogs.css';
import css from './PrefillDialog.css';

const PrefillDialog = ({ prefillColorSetSelection, onClose, onPrefillColorSetSelect, onPrefillWithColorSet }) => (
  <div className={ css.container }>
    <p>
      <Emoji emoji="⚠️" right />
      <strong>Warning:</strong> prefilling with a built-in color set will overwrite any existing colors.
    </p>
    <form>
      <fieldset className={ `${formCss.fieldset} ${css.fieldset}` }>
        <legend>Built-in Color Sets</legend>
        <Radio
          value="themer-colors-default"
          label="Default"
          selected={ prefillColorSetSelection === 'themer-colors-default' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-night-sky"
          label="Night Sky"
          selected={ prefillColorSetSelection === 'themer-colors-night-sky' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-one"
          label="One"
          selected={ prefillColorSetSelection === 'themer-colors-one' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-polar-ice"
          label="Polar Ice"
          selected={ prefillColorSetSelection === 'themer-colors-polar-ice' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-lucid"
          label="Lucid"
          selected={ prefillColorSetSelection === 'themer-colors-lucid' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-finger-paint"
          label="Finger Paint"
          selected={ prefillColorSetSelection === 'themer-colors-finger-paint' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-solarized"
          label="Solarized"
          selected={ prefillColorSetSelection === 'themer-colors-solarized' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-github-universe"
          label="GitHub Universe"
          selected={ prefillColorSetSelection === 'themer-colors-github-universe' }
          onSelect={ onPrefillColorSetSelect }
        />
        <Radio
          value="themer-colors-nova"
          label="Nova"
          selected={ prefillColorSetSelection === 'themer-colors-nova' }
          onSelect={ onPrefillColorSetSelect }
        />
      </fieldset>
    </form>
    <div className={ formCss.footer }>
      <Button onClick={ onClose }>Cancel</Button>
      <Button
        primary
        disabled={ !prefillColorSetSelection }
        onClick={ () => onPrefillWithColorSet(prefillColorSetSelection) }
      >Prefill</Button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  prefillColorSetSelection: state.prefillColorSetSelection,
});
const mapDispatchToProps = dispatch => ({
  onClose: () => {
    dispatch(closeDialogs());
  },
  onPrefillColorSetSelect: (selection) => {
    dispatch(prefillColorSetSelectionChange(selection));
  },
  onPrefillWithColorSet: (selection) => {
    switch (selection) {
      case 'themer-colors-default':
        dispatch(prefillWithColorSet(colorsDefault));
        break;
      case 'themer-colors-night-sky':
        dispatch(prefillWithColorSet(colorsNightSky));
        break;
      case 'themer-colors-one':
        dispatch(prefillWithColorSet(colorsOne));
        break;
      case 'themer-colors-polar-ice':
        dispatch(prefillWithColorSet(colorsPolarIce));
        break;
      case 'themer-colors-lucid':
        dispatch(prefillWithColorSet(colorsLucid));
        break;
      case 'themer-colors-finger-paint':
        dispatch(prefillWithColorSet(colorsFingerPaint));
        break;
      case 'themer-colors-solarized':
        dispatch(prefillWithColorSet(colorsSolarized));
        break;
      case 'themer-colors-github-universe':
        dispatch(prefillWithColorSet(colorsGitHubUniverse));
        break;
      case 'themer-colors-nova':
        dispatch(prefillWithColorSet(colorsNova));
        break;
      default:
        dispatch(prefillWithColorSet(colorsDefault));
        break;
    }
    dispatch(closeDialogs());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrefillDialog);
