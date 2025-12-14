"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [courses, setCourses] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // LOAD COURSES
  async function load() {
    const r = await fetch("/api/courses");
    const data = await r.json();
    setCourses(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    load();
  }, []);

  // ADD OR UPDATE
  async function addOrUpdate() {
    if (!title.trim()) return;

    if (editId) {
      // UPDATE
      await fetch("/api/courses/" + editId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      setEditId(null);
    } else {
      // CREATE
      await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
    }

    setTitle("");
    load();
  }

  // DELETE
  async function del(id: string) {
    await fetch("/api/courses/" + id, { method: "DELETE" });
    setCourses((prev) => prev.filter((c) => c._id !== id));
  }

  // EDIT (PREFILL INPUT)
  function editCourse(course: any) {
    setEditId(course._id);
    setTitle(course.title);
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="Course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-black text-white px-4" onClick={addOrUpdate}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {courses.map((c) => (
          <li
            key={c._id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{c.title}</span>

            <div className="flex gap-2">
              <button className="text-blue-600" onClick={() => editCourse(c)}>
                Edit
              </button>
              <button className="text-red-500" onClick={() => del(c._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
