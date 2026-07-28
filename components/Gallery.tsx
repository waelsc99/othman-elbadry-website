"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";

interface GalleryImage {
  id: string;
  image: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as GalleryImage[];
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
          🖼️ معرض الصور
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, 8).map((img) => (
            <div
              key={img.id}
              className="aspect-square relative rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 transition hover:scale-105 duration-300"
            >
              <Image
                src={img.image}
                alt="صورة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}