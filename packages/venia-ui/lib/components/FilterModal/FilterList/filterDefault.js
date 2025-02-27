import React from 'react';
import { useIntl } from 'react-intl';
import { bool, shape, string } from 'prop-types';

import Checkbox from '../../Checkbox';
import { mergeClasses } from '../../../classify';
import defaultClasses from './filterDefault.css';

const FilterDefault = props => {
    const {
        classes: propsClasses,
        isSelected,
        item,
        isExpanded,
        ...restProps
    } = props;
    const { label, value_index } = item || {};
    const { formatMessage } = useIntl();
    const classes = mergeClasses(defaultClasses, propsClasses);

    const ariaLabel = !isSelected
        ? formatMessage(
              {
                  id: 'filterModal.item.applyFilter',
                  defaultMessage: 'Apply filter'
              },
              {
                  optionName: label
              }
          )
        : formatMessage(
              {
                  id: 'filterModal.item.clearFilter',
                  defaultMessage: 'Remove filter'
              },
              {
                  optionName: label
              }
          );

    return (
        <Checkbox
            classes={classes.root}
            field={`${label}-${value_index}`}
            fieldState={{
                value: isSelected
            }}
            disabled={!isExpanded}
            label={label}
            ariaLabel={ariaLabel}
            {...restProps}
        />
    );
};

export default FilterDefault;

FilterDefault.propTypes = {
    classes: shape({
        root: string,
        icon: string,
        label: string,
        checked: string
    }),
    group: string,
    isSelected: bool,
    item: shape({
        label: string.isRequired,
        value_index: string.isRequired
    }).isRequired,
    label: string
};
