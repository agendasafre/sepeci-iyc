const { getAcademicUnits, isAllowedOrigin, send, setCors } = require("./_shared");

module.exports = function handler(req, res) {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (!isAllowedOrigin(req)) {
    send(res, 403, { status: "forbidden" });
    return;
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS");
    send(res, 405, { status: "failed" });
    return;
  }

  send(res, 200, { status: "ok", units: getAcademicUnits() });
};
