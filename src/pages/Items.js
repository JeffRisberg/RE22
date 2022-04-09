import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import Table from "../components/Table";


function handleEdit(row) {
  console.log(row);
  // display modal
  // say user types in modal new firstName
  // post request

  // set row.firstName = newFirstName
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
            Header: "",
            Cell: row => (
              <div>
                <button onClick={e=> handleEdit(row.row.original)}>Edit</button>
              </div>
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
        <Table columns={columns} data={data}/>
    </div>
  )
}

export default Items;

