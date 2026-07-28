"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FaCloudUploadAlt } from "react-icons/fa";

const CLOUD_NAME = "ft70t1ub";
const UPLOAD_PRESET = "othman_gallery";

export default function ImageUploader({ onUpload }: { onUpload?: () => void }) {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);
      formData.append("cloud_name", CLOUD_NAME);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        await addDoc(collection(db, "gallery"), {
          image: data.secure_url,
          publicId: data.public_id,
          createdAt: serverTimestamp(),
        });

        alert("✅ تم رفع الصورة بنجاح");
        setFile(null);
        if (onUpload) onUpload();
      } else {
        alert("❌ حدث خطأ في رفع الصورة");
      }
    } catch (error) {
      console.error(error);
      alert("❌ حدث خطأ في رفع الصورة");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900 p-6 border border-yellow-500/20">
      <h2 className="text-xl font-bold text-yellow-400 mb-5 flex items-center gap-2">
        <FaCloudUploadAlt />
        رفع صورة جديدة
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-yellow-500 file:text-slate-950 file:font-bold hover:file:bg-yellow-400 transition"
        />

        {file && (
          <div className="text-slate-300 text-sm">
            📎 {file.name} ({(file.size / 1024).toFixed(0)} KB)
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`w-full py-3 rounded-xl font-bold transition ${
            !file || uploading
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : "bg-yellow-500 text-slate-950 hover:bg-yellow-400"
          }`}
        >
          {uploading ? "⏳ جاري الرفع..." : "🚀 رفع الصورة"}
        </button>
      </div>
    </div>
  );
}