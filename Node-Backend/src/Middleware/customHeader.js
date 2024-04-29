const customHeaderMiddleware = () => {
  return (req, res, next) => {
    const trackingId = generateTrackingId();
    req.headers["X-Tracking-ID"] = trackingId;
    next();
  };
};

const generateTrackingId = () => {
  return Math.random().toString(36).substring(2, 12);
};

export default customHeaderMiddleware;
