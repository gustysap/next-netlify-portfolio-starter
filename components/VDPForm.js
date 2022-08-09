export default function VDPForm() {
  return (
    <form name="VDP Submissions" action="/success" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <input type="hidden" name="form-name" value="VDP Submissions" />
      <p>
        <label htmlFor="reporttitle">Report Title:</label>
        <input type="text" name="title" id="reporttitle" />
      </p>
      <p>
        <label htmlFor="productname">Product/Website Name: </label>{' '}
        <input type="email" name="productname" id="productname" />
      </p>
      <p>
        <label>
          <span>Add file:</span>
        <input name="file" type="file"/>
        </label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send Report</button>
      </p>
      <style jsx>{`
        label {
          font-size: 0.8rem;
        }

        input,
        textarea {
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid #d6d6d6;
          font-size: 1.3rem;
        }

        input:focus,
        textarea:focus {
          outline: 1px dotted #d6d6d6;
        }

        button {
          padding: 20px;
          background: orange;
          color: white;
          border-radius: 10px;
          font-size: 1.3rem;
        }
      `}</style>
    </form>
  )
}
