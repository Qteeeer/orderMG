import { Box, alpha } from "@mui/material";
import { forwardRef } from "react";

const getColor = (cross, palette, crossAlpha) => {
  let newColor =
    typeof cross === "string"
      ? cross
          .split(".")
          .reduce((prev, item) => (prev ? prev?.[item] : null), palette)
      : undefined;

  if (newColor) {
    if (typeof newColor === "object") {
      newColor = newColor?.main;
    }
    return newColor ? alpha(newColor, crossAlpha ?? 0.5) : "";
  }
  return cross ? alpha(cross, crossAlpha ?? 0.5) : "";
};

/**
 * @typedef {boolean | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'} AlignItems
 */

/**
 * @typedef {boolean | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'} JustifyContent
 */

/**
 * @typedef {Object} MyBoxProps
 * @property {boolean} [grow] - Указывает, следует ли растягивать элемент.
 * @property {boolean} [defFlex] - Указывает, следует ли использовать флекс-контейнер с направлением в колонку.
 * @property {boolean} [flex] - Указывает, следует ли использовать флекс-контейнер с направлением в строку.
 * @property {boolean} [defGrid] - Указывает, следует ли использовать GRID-контейнер с двумя колонками по умолчанию 1fr 1fr.
 * @property {boolean} [center] - "".
 * @property {boolean} [row] - "".
 * @property {boolean | number} [gap] -"Отступы".
 * @property {boolean} [cross] -"Штриховка фона".
 * @property {string} [crossSize] -"Штриховка размер".
 * @property {boolean} [fullColor] -"Полная заливка".
 * @property {boolean} [strong] -"Контурная заливка".
 * @property {boolean} [glass] -"Эффект стекла".
 * @property {boolean} [hover] -"Эффект наведения".
 * @property {boolean} [active] -"Эффект активного элемента".
 * @property {boolean} [wrap] -"Перенос элементов".
 * @property {string} [gridTemplateColumns] -"Эффект активного элемента".
 *
 * @property {AlignItems} [ai] - Выравнивание по align-items.
 * @property {JustifyContent} [jc] - Выравнивание по justify-content.
 *
 */

/**
 * @typedef {import('@mui/material').BoxProps} MuiProps
 * @typedef {MuiProps & MyBoxProps} MyProps
 */

/**
 * @type {React.ForwardRefExoticComponent<MyProps & React.RefAttributes<HTMLElement>>}
 */

const Default = forwardRef((props, ref) => {
  const {
    defFlex,
    flex,
    defGrid,
    ai,
    jc,
    jc_sp,
    center,
    row,
    gap,
    grow,
    sx,
    cross,
    borderEmpty,
    crossSize,
    crossAlpha,
    border,
    fullColor,
    strong,
    glass,
    hover,
    active,
    gridTemplateColumns,
    wrap,
    ...other
  } = props;

  let newSx = {};

  if (glass) {
    newSx.backdropFilter = "blur(40px)";
    newSx.boxShadow = (theme) => theme.shadows[10];
    newSx.border = ({ palette }) => `1px solid ${palette.divider}`;
  }

  if (defFlex || flex) {
    newSx.display = "flex";
    newSx.flexDirection = "column";
  }

  if (wrap) {
    newSx.flexWrap = wrap === true ? "wrap" : wrap;
  }

  if (defGrid) {
    newSx.display = "grid";
    newSx.gridTemplateColumns = "1fr 1fr";
    newSx.gap = 1;
  }

  if (gridTemplateColumns) {
    newSx.gridTemplateColumns = gridTemplateColumns;
  }

  if (ai) {
    newSx.alignItems = ai === true ? "center" : ai;
  }

  if (jc) {
    newSx.justifyContent = jc === true ? "center" : jc;
  }

  if (jc_sp) {
    newSx.justifyContent = "space-between";
  }

  if (center) {
    newSx.alignItems = "center";
    newSx.justifyContent = "center";
  }

  if (row) {
    newSx.flexDirection = "row";
  }

  if (gap) {
    newSx.gap = gap === true ? 1 : parseFloat(gap) ? parseFloat(gap) : gap;
  }

  if (grow) {
    newSx.flexGrow =
      grow === true ? 1 : parseFloat(grow) ? parseFloat(grow) : grow;
  }

  if (strong) {
    newSx.backgroundColor = "action.selected";
    newSx.px = 0.5;
    newSx.py = 0.25;
    newSx.borderRadius = 1;
  }

  if (hover) {
    newSx["&:hover"] = {
      backgroundColor: active ? "action.selected" : "action.hover",
    };
    newSx.transition = "background-color 200ms linear";
  }

  if (active) {
    newSx.backgroundColor = "action.selected";
    // newSx.color = "action.active";
    newSx.transition = "background-color 200ms linear";
  }

  return (
    <Box
      ref={ref}
      sx={{
        background: cross
          ? ({ palette }) =>
              `linear-gradient(-45deg,rgba(0, 0, 0, 0) 50%,${
                fullColor ? cross : getColor(cross, palette, crossAlpha)
              } 50%,rgba(0, 0, 0, 0) 52%)`
          : null,
        backgroundSize: cross
          ? ({ palette }) =>
              palette.mode === "dark"
                ? `${crossSize ?? "0.6"}em ${crossSize ?? "0.6"}em`
                : `${crossSize ?? "0.4"}em ${crossSize ?? "0.4"}em`
          : null,
        ...(border
          ? {
              borderRadius: 1,
              // border: ({ palette }) =>
              //   `1px solid ${!borderEmpty ? palette.divider : "transparent"}`,
            }
          : {}),
        ...newSx,
        ...sx,
      }}
      {...other}
    />
  );
});

export { Default as Box };
