import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
// import Icon from '../../components/Icon';
import * as colors from '../../../constants/colors';

const SidebarTitle = ({ title, style }) => (
  <View style={[{ paddingHorizontal: 2, paddingVertical: 8, backgroundColor: colors.listBackPurple }, style]}>
    <Text style={{ fontFamily: 'OpenSans', fontSize: 12, marginLeft: 12, color: colors.white }}>{title}</Text>
  </View>
);

SidebarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

SidebarTitle.defaultProps = {
  title: 'Settings',
};

export default SidebarTitle;