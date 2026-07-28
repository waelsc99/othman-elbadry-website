"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import ImageUploader from "@/components/ImageUploader";
import { FaTrash, FaSignOutAlt } from "react-icons/fa";

interface GalleryImage {
  id: string;
  image: string;
  createdAt: any;
}

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

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
    } finally {
      setLoadingImages(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchImages();
    }
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذه الصورة؟")) return;
    try {
      await deleteDoc(doc(db, "gallery", id));
      setImages(images.filter((img) => img.id !== id));
      alert("✅ تم حذف الصورة");
    } catch (error) {
      console.error(error);
      alert("❌ حدث خطأ في حذف الصورة");
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/signin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-yellow-400 text-xl">جاري التحميل...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-yellow-400">
            🎛️ لوحة التحكم
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition text-sm"
            >
              <FaSignOutAlt />
              تسجيل خروج
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* رفع الصور */}
          <div>
            <ImageUploader onUpload={fetchImages} />
          </div>

          {/* الإحصائيات */}
          <div className="rounded-2xl bg-slate-900 p-6 border border-yellow-500/20">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              📊 إحصائيات
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-800 rounded-xl">
                <span className="text-slate-400">عدد الصور</span>
                <span className="text-white font-bold text-xl">{images.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* معرض الصور */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            🖼️ معرض الصور
          </h2>

          {loadingImages ? (
            <p className="text-slate-400">جاري تحميل الصور...</p>
          ) : images.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-dashed border-slate-700">
              <p className="text-slate-400">لا توجد صور في المعرض</p>
              <p className="text-sm text-slate-500">قم برفع أول صورة من الأعلى</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="group relative rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-500 transition"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={img.image}
                      alt={`صورة ${img.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <FaTrash className="text-white text-sm" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}