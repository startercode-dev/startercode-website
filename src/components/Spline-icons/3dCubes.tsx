import clsx from 'clsx';
import Image from 'next/image';

export default function Icon1Animate({ activeService }) {
  return (
    <div className="absolute h-fit w-fit">
      <spline-viewer
        loading-anim-type="spinner-small-light"
        url="https://prod.spline.design/zd4ZWxuLQJ2Sb0Z3/scene.splinecode"
        class={clsx(
          'h-fit w-fit !overflow-visible transition-opacity duration-1000 ease-in-out max-sm:scale-[0.6]',
          {
            'opacity-0': activeService !== 1,
          },
        )}
      >
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAJ+ElEQVR4AQCBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AAIEAfv8Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QAAgQB+/wBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAACBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AAIEAfv8Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QAAgQB+/wBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAACBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AAIEAfv8Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QAAgQB+/wBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAACBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AAIEAfv8Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QAAgQB+/wBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAACBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AAIEAfv8Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QAAgQB+/wBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAACBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AAIEAfv8Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QAAgQB+/wBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAAGBAH7/AHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0Acm3tAHJt7QBybe0AJQNEvY8ZghkAAAAASUVORK5CYII="
          fill
          alt="Custom design and software development services"
          style={{ width: '100%', height: '100%' }}
        />
      </spline-viewer>
    </div>
  );
}
