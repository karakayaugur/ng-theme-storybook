import { signal, computed, Injectable } from '@angular/core';

type SidebarState = 'hidden' | 'collapsed' | 'expanded';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private width = signal(window.innerWidth);

  private manualState = signal<SidebarState | null>(null);

  private readonly breakpointState = computed<SidebarState>(() => {
    const w = this.width();
    if (w < 768) return 'hidden';
    if (w < 1024) return 'collapsed';
    return 'expanded';
  });

  readonly state = computed<SidebarState>(() => {
    return this.manualState() ?? this.breakpointState();
  });

  setState(s: SidebarState) {
    this.manualState.set(s);
  }

  reset() {
    this.manualState.set(null);
  }

  updateWidth(w: number) {
    this.width.set(w);
  }
}
