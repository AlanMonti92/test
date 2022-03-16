import React from 'react';
import Helmet from 'react-helmet';

export default function Layout({ title, children }) {
  return (
    <div>
      <Helmet titleTemplate="%s | Ping CRM" title={title} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="flex flex-grow overflow-hidden">
          </div>
        </div>
      </div>
    </div>
  );
}
