function Hours() {
  return (
      <>
          <table border={5}>
              <thead>
                  <tr>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                      <th>Sunday</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>9am - 9pm</td>
                      <td>9am - 9pm</td>
                      <td>9am - 9pm</td>
                      <td>9am - 9pm</td>
                      <td>9am - 9pm</td>
                      <td>9am - 9pm</td>
                      <td>9am - 6pm</td>
                  </tr>
                  <tr>
                      <td>LAST client of the day MUST book 8:00PM slot.</td>
                      <td>LAST client of the day MUST book 8:00PM slot.</td>
                      <td>LAST client of the day MUST book 8:00PM slot.</td>
                      <td>LAST client of the day MUST book 8:00PM slot.</td>
                      <td>LAST client of the day MUST book 8:00PM slot.</td>
                      <td>LAST client of the day MUST book 8:00PM slot.</td>
                      <td>LAST client of the day MUST book 400PM slot.</td>
                  </tr>
              </tbody>
          </table>
      </>
  );
}

export default Hours;
