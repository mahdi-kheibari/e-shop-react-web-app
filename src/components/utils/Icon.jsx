import * as MuiIcons from "@mui/icons-material";
const Icon = ({ iconName }) => {
  const IconComponent = MuiIcons[iconName];
  return <IconComponent />;
};

export default Icon;
