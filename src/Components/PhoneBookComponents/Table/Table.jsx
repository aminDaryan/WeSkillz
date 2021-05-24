import React from "react";
import "./tableStyle.css";

// Utils
import { Card } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
// import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > table": {
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        height: "100%",
      },
    },
    "& > div": {
      [theme.breakpoints.down("lg")]: {
        borderLeft: "none",
        borderRight: "none",
        borderRadius: "none",
      },
    },
  },
}));

const TableCard = styled(Card)({
  width: "100%",
  border: "2px solid rgba(224, 224, 224, 0.5)",
  boxShadow: "none",
  padding: "4rem 2rem",
  overflow: "auto",
});

export default function Table() {
  const classes = useStyles();

  return (
    <div className="w-full  text-xl">
      <div className={classes.root}>
        <TableCard>
          <table className="w-full table-auto" rules="groups">
            <thead>
              <tr className="border-b">
                <th className="text-left text-green-600 font-bold text-xl pb-6 pl-5">
                  Name
                </th>
                <th className="text-left text-green-600 font-bold text-xl pb-6 pl-5">
                  Phone number
                </th>
                <th className="text-left text-green-600 font-bold text-xl pb-6 pl-5">
                  Email address
                </th>
                <th className="text-left text-green-600 font-bold text-xl pb-6 pl-5"></th>
              </tr>
            </thead>
            <tbody>
              <div className="text-left text-green-600 opacity-50 font-bold my-6 pl-5">
                <span>Contacts (11)</span>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <tr key={i} className="hover:bg-green-50">
                  <td className="text-left text-green-600 text-xl py-3  pl-5  rounded-t-md rounded-l-md">
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-600 w-10 h-10 text-white flex justify-center items-center mr-3 font-bold">
                        <span>J</span>
                      </div>
                      <div>
                        <span className="text-green-600">John Smith</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-left text-green-600 py-3 pl-5">
                    <span> 0949430943</span>
                  </td>
                  <td className="text-left text-green-600 py-3 pl-5">
                    <span>John@gmail.com</span>
                  </td>
                  <td className="flex text-green-600 py-3 ml-5 text-right  rounded-r-md rounded-b-md">
                    <button className="bg-transparent mr-4">
                      <EditIcon
                        style={{
                          color: "rgb(0, 149, 92)",
                          fontSize: 35,
                        }}
                      />
                    </button>
                    <button className="bg-transparent mr-4">
                      <DeleteOutlineIcon
                        style={{ color: "rgb(0, 149, 92)", fontSize: 35 }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
      </div>
    </div>
  );
}

// Table.propTypes = {
//   users: PropTypes.shapeOf({}).isRequired,
// };
