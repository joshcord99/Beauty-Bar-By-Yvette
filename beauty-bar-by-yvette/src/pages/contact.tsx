import MapComponent from "../components/Map";

function Contact() {
  return (
    <div>

      <h1 className="text-2xl flex justify-center text-center">
       ** Feel free to reach out to me. I look forward to meeting you and making
        you So Lashy 💖! **
      </h1>

     

      <h2 className="text-3xl font-bold underline flex justify-center mt-6">
        Instagram
      </h2>
      <h3 className="text-2xl flex justify-center">@_SOLASHY</h3>

      <h2 className="text-3xl font-bold underline flex justify-center mt-6">
        Location
      </h2>
      <h3 className="text-2xl flex justify-center">
        5203 Atlantic Ave Ventnor City, NJ 08406 United States
      </h3>

      <div className="flex justify-center mt-4">
        <MapComponent />
      </div>

      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-3xl font-bold underline text-center mb-6">
          Hours of Operation
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-black-300">
            <thead>
              <tr className="bg-black-200 text-black-700">
                <th className="border border-black-300 px-4 py-2">Monday</th>
                <th className="border border-black-300 px-4 py-2">Tuesday</th>
                <th className="border border-black-300 px-4 py-2">Wednesday</th>
                <th className="border border-black-300 px-4 py-2">Thursday</th>
                <th className="border border-black-300 px-4 py-2">Friday</th>
                <th className="border border-black-300 px-4 py-2">Saturday</th>
                <th className="border border-black-300 px-4 py-2">Sunday</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-center">
                <td className="border border-black-300 px-4 py-2">9am - 9pm</td>
                <td className="border border-black-300 px-4 py-2">9am - 9pm</td>
                <td className="border border-black-300 px-4 py-2">9am - 9pm</td>
                <td className="border border-black-300 px-4 py-2">9am - 9pm</td>
                <td className="border border-black-300 px-4 py-2">9am - 9pm</td>
                <td className="border border-black-300 px-4 py-2">9am - 9pm</td>
                <td className="border border-black-300 px-4 py-2">9am - 6pm</td>
              </tr>

              <tr className="text-center text-red-600 font-semibold">
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 8:00PM
                </td>
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 8:00PM
                </td>
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 8:00PM
                </td>
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 8:00PM
                </td>
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 8:00PM
                </td>
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 8:00PM
                </td>
                <td className="border border-black-300 px-4 py-2">
                  LAST client: 4:00PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
