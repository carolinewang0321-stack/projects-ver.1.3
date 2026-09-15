import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function PageShell({
  back,
  title,
  sub,
  children,
}: {
  back: string;
  title: string;
  sub: string;
  children: ReactNode;
}) {
  return (
    <div className="grid-bg detail-page">
      <div className="container">
        <div className="detail-head reveal">
          <Link to={back} className="back-link">← 返回首页</Link>
          <h1 className="detail-title">{title}<span className="dot">.</span></h1>
          <p className="detail-sub mono">{sub}</p>
        </div>
        {children}
      </div>
    </div>
  );
}