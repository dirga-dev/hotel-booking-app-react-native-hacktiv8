import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    marginHorizontal: 20,
    width: WIDTH * 0.9,
    height: 125,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },

  name: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
  },
  code: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.grey1,
  },
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    flex: 1,
  },
  textWrapper: {
    paddingLeft: 15,
  },
  cardTitle: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  title: {
    fontFamily: fonts.primary[400],
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
