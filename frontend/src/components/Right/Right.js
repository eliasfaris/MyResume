import React, { useContext } from "react";
import Paper from "./Paper/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";
import { ResumeContext } from "../../contexts/ResumeContext";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    "& > *": {
      margin: 0,
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: 10,
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
    margin: 10,
  },
}));

function Right() {
  const { setContent } = useContext(ResumeContext);
  const classes = useStyles();
  const handleSaveToPDF = (event) => {
    event.preventDefault();
    window.print();
  };

  return (
    <div className="right">
      <div className={classes.root}>
        <Link href="#" onClick={handleSaveToPDF}>
          <Tooltip title="Save to PDF" placement="right">
            <Avatar className={classes.pink}>
              <PictureAsPdfIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </div>
      <Paper />
    </div>
  );
}

export default Right;
