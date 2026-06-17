import { useState } from 'react';

export function useProtocolosState() {
  const [activeTab, setActiveTab] = useState('Governo');

  return { activeTab, setActiveTab };
}
