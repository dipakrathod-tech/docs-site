import React from 'react'

export const FileIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v6h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const FolderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} width="20" height="20">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const MdxIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} width="20" height="20">
    <path d="M4 4h16v16H4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8h8v8H8z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const icons = { FileIcon, FolderIcon, MdxIcon }

export default icons
