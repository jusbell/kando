//////////////////////////////////////////////////////////////////////////////////////////
//   _  _ ____ _  _ ___  ____                                                           //
//   |_/  |__| |\ | |  \ |  |    This file belongs to Kando, the cross-platform         //
//   | \_ |  | | \| |__/ |__|    pie menu. Read more on github.com/kando-menu/kando     //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: MIT

import { IVec2 } from '../../common';

/** This class is used to display the text in the center of the pie menu. */
export class CenterText {
  /**
   * The div that contains the text. It will be positioned absolutely and translated
   * relative to the center of the pie menu's root element.
   */
  private div: HTMLDivElement;

  /** The computed width and height of the text element. */
  private width: number = 0;
  private height: number = 0;

  /**
   * The constructor creates the text element and appends it to the given container.
   *
   * @param container The parent element of the text element.
   * @param maxWidth The diameter of the circle in which the text is displayed.
   */
  constructor(container: HTMLElement, maxWidth: number) {
    this.div = document.createElement('div');
    this.div.classList.add('center-text');
    this.div.classList.add('hidden');

    // Wrapper element for the div that contains the text. This element is responsible
    // for adding CSS styling that centers the actual element containing the text.
    const textContainer = document.createElement('div');
    textContainer.classList.add('center-text-container');
    textContainer.appendChild(this.div);

    container.appendChild(textContainer);
  }

  /** This method shows the text element by removing the `hidden` class. */
  public show() {
    this.div.classList.remove('hidden');
  }

  /** This method hides the text element by adding the `hidden` class. */
  public hide() {
    this.div.classList.add('hidden');
  }

  /**
   * This method sets the text of the text element. The method computes the width and
   * height of the text element based on the text and the available space in the circle.
   *
   * @param text The text to display.
   */
  public setText(text: string) {
    this.div.innerHTML = text;
  }

  /**
   * This method sets the position of the text element. The position is relative to the
   * container element given in the constructor.
   *
   * @param position The position of the text element.
   */
  public setPosition(position: IVec2) {
    this.div.style.transform = `translate(${position.x - this.width / 2}px, ${position.y - this.height / 2}px)`;
  }
}
