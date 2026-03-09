import type { ComponentConfig } from '@/support/types'

import type { InputProps } from '@/components/input'

export type SearchSlots = 'root' | 'item'

export type SearchValue = Record<string, unknown>

export type SearchItem = {
  input: 'Input';
  props: InputProps;
}

export type SearchProps<T extends SearchValue> = {
  value?: Partial<T>;           
  defaultValue?: Partial<T>;    
  items: SearchItem[];
  visibleCount?: number;        
  onChange?: (value: Partial<T>) => void;
}

export type SearchConfig = ComponentConfig<SearchProps<SearchValue>, SearchSlots>
