export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-3 p-4">
        <h1 className="fw-bold text-success mb-3">Contact Us</h1>
        <p className="text-muted lead">
          Have questions or feedback? We’d love to hear from you! 💬
        </p>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
