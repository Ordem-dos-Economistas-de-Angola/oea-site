import { useState } from 'react';

export function useHomeState() {
  const [searchOpen, setSearchOpen] = useState(false);
  return { searchOpen, setSearchOpen };
}
