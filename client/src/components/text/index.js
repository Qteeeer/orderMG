import { Typography } from "@mui/material";

/**
 * @typedef {Object} MyAddonProps
 * @property {string} [caption] - Заголовок.
 * @property {string} [langBase] - Свой указатель для точки перевода.
 * @property {boolean} [secondary] - Как второстепенный текст.
 * @property {boolean} [copy] - Копирование.
 * @property {boolean} [strong] - Контур обводки.
 * @property {boolean} [marker] - Контур обводки без фона.
 * @property {boolean} [showEmpty] - Показывать даже без значения.
 * @property {string} [help] - Подсказка.
 * @property {object} [sxHelp] - Стиль подсказки.
 *
 */

/**
 * @typedef {import('@mui/material').TypographyProps} MuiProps
 * @typedef {MuiProps & MyAddonProps} MyProps
 */

/**
 * @param {MyProps} props - Свойства BOX компонента.
 * @returns {JSX.Element}
 */

const Default = (props) => {
  const { caption, sx, secondary, strong, marker, showEmpty, bold, ...other } =
    props;

  if ((!caption || caption === "") && !showEmpty) {
    return null;
  }

  let newSx = { lineHeight: "unset" };

  if (bold) {
    newSx.fontWeight = "bold";
  }

  if (strong) {
    newSx.backgroundColor = "action.selected";
    newSx.px = 0.75;
    newSx.py = 0.25;
    newSx.borderRadius = 1;
  }

  if (marker) {
    newSx.backgroundColor = "unset";
    newSx.border = ({ palette }) => `1px solid ${palette.divider}`;
    newSx.px = 0.75;
    newSx.py = 0.25;
    newSx.borderRadius = 1;
  }

  if (secondary) {
    newSx.fontSize = 12;
    newSx.color = "text.secondary";
  }

  newSx = { ...newSx, ...sx };

  let component = (
    <Typography sx={newSx} {...other}>
      {caption}
    </Typography>
  );

  return component;
};

export { Default as Text };
