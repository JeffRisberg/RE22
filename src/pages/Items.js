import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import Table from "../components/Table";


function handleEdit(row) {
  var index = row.index;
  console.log("edit item at " + index);
  // display modal
  // say user types in modal new firstName
  // post request

  // set row.firstName = newFirstName
}

function handleClick(e) {
  console.log("items click")
}

function Items() {

  const columns = useMemo(
    () => [
      {
        Header: "Items",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Value",
            accessor: "value"
          },
          {
            Header: "Edit",
            id: "id",
            Cell: ({row}) => (
              <button onClick={e => handleEdit(row)}>
                Detailed View
              </button>
            )
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3000/api/items");
      setData(result.data.data);
    })();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>
        Click
      </button>
      <Table columns={columns} data={data}/>
    </div>
  )
}

export default Items;

