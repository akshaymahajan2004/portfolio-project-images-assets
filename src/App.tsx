import { useState } from "react";
import { Copy, Check, Image as ImageIcon } from "lucide-react";
import "./App.css";

// --- 1. ADD YOUR IMAGE FILENAMES HERE ---
// Make sure these files exist inside your 'public' folder.
const myImages = [
  "portfolio-project.png",
  "login-signup.png",
  "Estate-x.png",
  "AI-resume-analyzer.png",
  "Buildify.png"
  // Add more filenames here...
];

function App() {
  const [copied, setCopied] = useState<string | null>(null);

  // Helper: Generates the full URL for the image
  const getFullUrl = (filename: string) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/${filename}`;
  };

  const handleCopy = (filename: string) => {
    const url = getFullUrl(filename);
    navigator.clipboard.writeText(url);
    setCopied(filename);
    setTimeout(() => setCopied(null), 2000); // Reset "Copied" text after 2s
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">

        {/* Header */}
        <header className="main-header">
          <div className="title-group">
            <ImageIcon className="icon-main" size={40} />
            <h1>Asset Vault</h1>
          </div>
          <p className="subtitle">
            Upload images to <code>/public</code> &bull; Add name to <code>App.tsx</code> &bull; Click to Copy
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {myImages.map((img, index) => (
            <div key={index} className="asset-card">

              {/* Image Preview Area */}
              <div className="image-wrapper">
                <img
                  src={`/${img}`}
                  alt={img}
                  onError={(e) => {
                    // Hides image and shows error text if file is missing
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.add('show-error');
                  }}
                />
                <div className="error-msg">File Not Found</div>
              </div>

              {/* Card Footer (Name & Button) */}
              <div className="card-footer">
                <p className="filename" title={img}>{img}</p>
                <button
                  onClick={() => handleCopy(img)}
                  className={`copy-btn ${copied === img ? "copied" : ""}`}
                >
                  {copied === img ? (
                    <><Check size={18} /> Copied!</>
                  ) : (
                    <><Copy size={18} /> Copy URL</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {myImages.length === 0 && (
          <div className="empty-state">
            No images listed in <code>App.tsx</code>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
