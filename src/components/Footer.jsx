function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <h5>Edom Restaurant</h5>

      <p>574 Main Street, Washington, DC</p>
      <p>📞 (537) 625-4538</p>
      <p>✉️ info@edomrestaurant.com</p>

      <div className="mb-3">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-white me-3"
        >
          Facebook
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white me-3"
        >
          Instagram
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          TikTok
        </a>
      </div>

      <p>© 2026 Edom Restaurant. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;