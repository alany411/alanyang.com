export default function PricingTable() {
  return (
    <div className='table-container'>
      <table className='m-0'>
        <thead>
          <tr>
            <th></th>
            <th>GoDaddy</th>
            <th>DreamHost</th>
            <th>NameCheap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Domain (.com)</th>
            <td>$18.99</td>
            <td>$15.99</td>
            <td>$12.98</td>
          </tr>
          <tr>
            <th>Hosting</th>
            <td>$143.88</td>
            <td>$155.88</td>
            <td>$58.56</td>
          </tr>
          <tr>
            <th>SSL Certificate</th>
            <td>$94.99</td>
            <td>Free</td>
            <td>Free</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>$71.88</td>
            <td>Free</td>
            <td>Free</td>
          </tr>
          <tr>
            <th>Total Yearly Cost</th>
            <td>$329.74</td>
            <td>$171.87</td>
            <td>$71.54</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
