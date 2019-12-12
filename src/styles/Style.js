import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: '#200A85'
  },
  toolbar: {
    color: "#B80B99",
    flexWrap: "wrap",
  },
  toolbarTitle: {
    color: "#B80B99",
    flexGrow: 1,
    margin: 10,
    height: "70px"
  },
  link: {
    margin: theme.spacing(1, 2),
    fontSize: "24px",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  loginButton: {
    marginLeft: 0,
    backgroundColor: "#EC9120",
    border: "1px solid #EC9120",
    borderTopRightRadius: "24px",
    borderBottomRightRadius: "24px",
    color: "white"
  },
  registerButton: {
    marginRight: 0,
    marginLeft: "12px",
    backgroundColor: "whitesmoke",
    border: "1px solid whitesmoke",
    borderTopLeftRadius: "24px",
    borderBottomLeftRadius: "24px",
    color: "black"
  },
  footer: {
    marginTop: "40px",
    backgroundColor: "#200A85",
    padding: theme.spacing(6),
    height: "300px",
    display: "flex",
    alignContent: "space-between",
    justifyContent: "space-between"
  },
  image: {
    width: "100%"
  },
  footerContainer: {
    padding: "20px",
    textAlign: "center",
    fontSize: "24px",
    color: "whitesmoke"
  },
  footerTitle: {
    color: "#ECc968",
    marginBottom: "20px",
    textAlign: "center"
  }
}));

export default useStyles;
