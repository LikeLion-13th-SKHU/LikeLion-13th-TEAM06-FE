// src/shared/components/header/Header.tsx

import type { HeaderConfig } from '@/shared/contexts/HeaderContext';
import { useHideOnScroll } from '@/shared/hooks/useHideOnScroll';
import '@/shared/styles/_header.scss';
import bookmarkIcon from '@/assets/svg/bookmark.svg';
import bellIcon from '@/assets/svg/bell.svg';
import userIcon from '@/assets/svg/user.svg';

function ActionIcon({ id, onClick, label }: { id: string; onClick?: () => void; label?: string }) {
  const icon =
    id === 'bookmark' ? (
      <img src={bookmarkIcon} alt="북마크" width="24" height="24" />
    ) : id === 'mypage' ? (
      <img src={userIcon} alt="마이페이지" width="24" height="24" />
    ) : id === 'notification' ? (
      <img src={bellIcon} alt="알림" width="24" height="24" />
    ) : (
      '⋯'
    );

  return (
    <button className="icon" aria-label={label ?? id} onClick={onClick}>
      {icon}
    </button>
  );
}

export default function Header({ config }: { config: HeaderConfig }) {
  if (config.kind === 'none') return null;

  const hidden = useHideOnScroll(12);
  const isHidden = !!config.autoHide && hidden;

  const Right = (
    <div className="right">
      {config.rightActions?.map((a) => (
        <ActionIcon key={a.id} id={a.id} onClick={a.onClick} label={a.label} />
      ))}
    </div>
  );

  if (config.kind === 'main') {
    return (
      <header className={`header-root ${isHidden ? 'is-hidden' : ''}`}>
        <div className="header-inner">
          <div className="brand">동네링 🔔</div>
          {Right}
        </div>
      </header>
    );
  }

  if (config.kind === 'page') {
    return (
      <header className={`header-root ${isHidden ? 'is-hidden' : ''}`}>
        <div className="header-inner">
          <div className="left">
            <button
              className="icon"
              aria-label="뒤로가기"
              onClick={() => (config.backTo ? (location.href = config.backTo) : history.back())}
            >
              ←
            </button>
          </div>
          <div className="title">{config.title}</div>
          {Right}
        </div>
      </header>
    );
  }

  return (
    <header className={`header-root ${isHidden ? 'is-hidden' : ''}`}>
      <div className="header-inner">
        <div className="title">{config.title}</div>
        {Right}
      </div>
    </header>
  );
}
