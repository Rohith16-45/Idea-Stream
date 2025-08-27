"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      {/* Hero Section */}
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6 text-start">
          <h1 className="display-4 fw-bold">Welcome to My Website</h1>
          <p className="lead text-muted mt-3">
            Explore amazing posts, learn new things, and stay updated with the
            latest content. This website is built with Next.js & Bootstrap.
          </p>
          <Link href="/posts" className="btn btn-primary btn-lg mt-3">
            View Posts
          </Link>
        </div>

        <div className="col-md-6 text-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
            alt="Illustration"
            className="img-fluid"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="row mt-5">
        <div className="col-md-4">
          <h3>🚀 Fast</h3>
          <p>Next.js provides blazing-fast rendering and routing.</p>
        </div>
        <div className="col-md-4">
          <h3>🎨 Beautiful</h3>
          <p>Styled with Bootstrap for a clean & responsive layout.</p>
        </div>
        <div className="col-md-4">
          <h3>📚 Informative</h3>
          <p>Access a collection of posts full of knowledge & insights.</p>
        </div>
      </div>
    </div>
  );
}
