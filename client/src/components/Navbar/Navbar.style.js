import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "bolder",
    padding: "30px",
    textDecoration: 'none',
  },
  image: {
    marginLeft: "30px",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px'
  },
  profile: {
    display: 'flex',
    justifyContent: ' space-between',
    width: '400px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));
