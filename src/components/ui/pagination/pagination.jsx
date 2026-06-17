import * as React from 'react';
import { cn } from '../../../lib/utils';

function Pagination({ total, page, perPage, onChange, className }) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push('...');
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const from = total === 0 ? 0 : (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);

  return (
    <div className={cn('shadcn-pagination', className)}>
      <div className="shadcn-pagination-info">
        {from}–{to} de {total}
      </div>
      <div className="shadcn-pagination-controls">
        <button className="shadcn-pagination-btn" disabled={page <= 1} onClick={() => onChange(page - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        {getPages().map((p, i) =>
          p === '...' ? (
            <span key={`e${i}`} className="shadcn-pagination-ellipsis">...</span>
          ) : (
            <button
              key={p}
              className={`shadcn-pagination-btn ${p === page ? 'active' : ''}`}
              onClick={() => onChange(p)}
            >
              {p}
            </button>
          ),
        )}
        <button className="shadcn-pagination-btn" disabled={page >= totalPages} onClick={() => onChange(page + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}

export { Pagination };
