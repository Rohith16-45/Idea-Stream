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
          <h1 className="display-4 fw-bold">Welcome to Idea Stream</h1>
          <p className="lead text-muted mt-3">
            A place where creativity flows and ideas never stop. Discover
            inspiring posts, learn new things, and stay connected with the
            stream of knowledge. Built with Next.js & Bootstrap.
          </p>
          <Link href="/posts" className="btn btn-primary btn-lg mt-3">
            View Posts
          </Link>
        </div>

        <div className="col-md-6 text-center">
          <Image
            src="/Idea stream.jpg"
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
          <h3>🚀 Flowing Ideas</h3>
          <p>Stay inspired with a constant stream of fresh insights.</p>
        </div>
        <div className="col-md-4">
          <h3>🎨 Creative Space</h3>
          <p>Beautifully designed to spark curiosity and imagination.</p>
        </div>
        <div className="col-md-4">
          <h3>📚 Knowledge Hub</h3>
          <p>Access posts full of creativity, learning, and innovation.</p>
        </div>
      </div>
    </div>
  );
}
