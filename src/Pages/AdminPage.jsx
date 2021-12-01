import React from "react";
import { Link } from "react-router-dom";
import BasicTable from "../components/BasicTable/BasicTable";
import { Button } from "react-bootstrap";

const AdminPage = () => {
  return (
    <>
      <div>ADMINPAGE</div>
      <Link to="/create" className="">
        <Button className="for-font" variant="outline-success">
          Add
        </Button>
      </Link>
      <BasicTable />
    </>
  );
};

export default AdminPage;
