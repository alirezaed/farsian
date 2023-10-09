import { TableContainer, styled } from "@mui/material";

type CustomTableContainerProps = {
  component: React.ElementType
}

export const CustomTableContainer = styled(TableContainer)<CustomTableContainerProps>(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
