function Terms() {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>

      {/* Cancellation Policy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Cancellation Policy</h2>
        <p className="text-gray-600">
          <strong>ALL CLIENTS</strong> are required to cancel appointments <strong>24 HRS IN ADVANCE</strong>.
        </p>
      </section>

      {/* Late Policy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Late Policy</h2>
        <p className="text-gray-600">
          Each client will receive a <strong>10-minute grace period</strong>. After 10 minutes, a 
          <strong> $15 late fee</strong> will be applied. If more than <strong>15 minutes late</strong>, your 
          appointment will be terminated, and you must make a new deposit.
        </p>
      </section>

      {/* No Show Policy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">No Show Policy</h2>
        <p className="text-gray-600">
          <strong className="text-red-600">NO CALL, NO SHOWS WILL NOT BE TOLERATED.</strong> 
          A <strong>50% charge</strong> of the service will be applied, and future bookings will be <strong>BANNED</strong>.
        </p>
      </section>

      {/* Refill Policy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Refill Policy</h2>
        <p className="text-gray-600">
          <strong>NEW CLIENTS</strong> must have no previous lash extensions done elsewhere.
          <br />** If more than <strong>50%</strong> of your lashes are detached or grown out, it will be considered a full set. **
        </p>
        <ul className="list-disc ml-6 text-gray-600 mt-2">
          <li><strong>2 Week Fills:</strong> No more than <strong>30%</strong> loss</li>
          <li><strong>3/4 Week Fills:</strong> No more than <strong>50%</strong> loss</li>
          <li><strong>5+ Week Fills:</strong> Requires a full new set</li>
        </ul>
      </section>

      {/* Additional Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Additional Information</h2>
        <p className="text-gray-600">
          <strong>Preferred payment:</strong> Cash. Starting <strong>March 1st, 2023</strong>, card payments will have an additional processing fee.
        </p>
      </section>

      {/* Exceptions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Exceptions</h2>
        <p className="text-gray-600">
          If you need a different time, please reach out via <strong>Text</strong> or <strong>Instagram DM (@_SOLASHY)</strong>. 
          We will try to accommodate your request.
        </p>
      </section>
    </div>
  );
}

export default Terms;
