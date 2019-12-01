import React from "react";
import TableProps from "./table.props";

const TableComponent = (props: TableProps) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <table
            className="table table-borderless"
            style={{
              width: 100 + "%",
              height: 100 + "%",
              tableLayout: "fixed"
            }}
          >
            <thead>{props.header}</thead>
            <tbody>{props.data}</tbody>
          </table>
          {!props.totalCount && (
            <p className="text-center">{props.noDataMessage}</p>
          )}
        </div>
      </div>
      {props.pagination}
    </div>
  );
};

TableComponent.defaultProps = {
  noDataMessage: "No data"
};

export default TableComponent;
