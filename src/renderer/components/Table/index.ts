import styled, { css } from 'styled-components';

import { opacity } from '../../../defaults';
import { robotoRegular, robotoMedium } from '../../mixins';

export const Table = styled.table`
  width: 100%;
  margin: 0px auto;
  border-collapse: collapse;
  position: relative;
  background-color: #fff;
`;

export const HeadRow = styled.tr`
  height: 48px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, ${opacity.light.dividers});
`;

export const HeadItem = styled.th`
  font-size: 13px;
  padding-left: 24px;
  opacity: ${opacity.light.secondaryText};

  ${robotoMedium()};
`;

export const BodyRow = styled.tr`
  height: 48px;
  border-top: 1px solid rgba(0, 0, 0, ${opacity.light.dividers});

  &:first-child {
    border-top: unset;
  }
`;

export const BodyItem = styled.td`
  font-size: 14px;
  padding-left: 24px;
  opacity: ${opacity.light.primaryText};

  ${robotoRegular()};
`;