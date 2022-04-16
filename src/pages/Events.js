import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import Table from "../components/Table";


function handleEdit(row) {
  var index = row.index;
  console.log("edit event at " + index);
  // display modal
  // say user types in modal new firstName
  // post request

  // set row.firstName = newFirstName
}

function handleClick(e) {
  console.log("events click")
}

function Events() {

  const columns = useMemo(
    () => [
      {
        Header: "Events",
        columns: [
          {
            Header: "Text",
            accessor: "text"
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Time",
            accessor: "time"
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
      const result = await axios("http://localhost:8080/api/events");
      setData(result.data.data);
    })();
  }, []);

  return (
    <div>
      TEST TEST
      <button onClick={handleClick}>
        Click
      </button>
      <Table columns={columns} data={data}/>
    </div>
  )
}

export default Events;

