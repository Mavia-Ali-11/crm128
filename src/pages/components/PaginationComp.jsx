import React from "react";
import { Pagination } from 'react-bootstrap'
export default function PaginationCom() {
  return (
    <div className="paginationBox">
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
}
