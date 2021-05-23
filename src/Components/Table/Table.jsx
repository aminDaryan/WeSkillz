import React from "react";
import "./tableStyle.css";

// Utils
import { Card } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { FirestoreCollection } from "@react-firebase/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > div": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const TableCard = styled(Card)({
  width: "100%",
  border: "2px solid rgba(224, 224, 224, 0.5)",
  boxShadow: "none",
  padding: "4rem 2rem",
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
                <th className="text-left text-green-600 font-bold text-xl pb-6 pl-5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <div className="text-left text-green-600 opacity-50 font-bold my-6 pl-5">
                <span>Contacts (11)</span>
              </div>
              <FirestoreCollection path="/contacts" limit={1}>
                {(d) => {
                  console.log("d: ",d)
                  return d.isLoading ? (
                    "Loading..."
                  ) : (
                    <tr>
                      <td className="text-left text-green-600 font-bold text-xl pb-6 pl-5">
                        <div className="flex items-center">
                          <div className="rounded-full bg-green-600 w-10 h-10 text-white flex justify-center items-center mr-3 font-bold">
                            <span>J</span>
                          </div>
                          <div>
                            <span className="text-green-600">John Smith</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-left text-green-600 pb-6 pl-5">
                        <span> 0949430943</span>
                      </td>
                      <td className="text-left text-green-600 pb-6 pl-5">
                        <span>John@gmail.com</span>
                      </td>
                      <td className="text-left text-green-600 pb-6 pl-5"></td>
                    </tr>
                  );
                }}
              </FirestoreCollection>
            </tbody>
          </table>
        </TableCard>
      </div>
    </div>
  );
}

Table.propTypes = {
  users: PropTypes.shapeOf({}).isRequired,
};
