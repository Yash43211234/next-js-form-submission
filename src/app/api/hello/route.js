export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  // simple validation (demo only)
  if (email === "garimakashyap9191@gmail.com" && password === "yashwant") {
    return new Response(JSON.stringify({ message: "Login successful!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
