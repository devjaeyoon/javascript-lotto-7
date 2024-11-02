import Lotto from '../models/Lotto.js';
import Money from '../models/Money.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottoCount;
  #lottos;
  #winningNumbers;

  async run() {
    await this.getLottoCount();
    await this.getLotto();
  }

  async getLottoCount() {
    const moneyInput = await InputView.readLineAsync('구입금액을 입력해 주세요.\n');
    this.#lottoCount = new Money(moneyInput).calculateLottoCount();
    OutputView.printNewLine();
    OutputView.printLottoCount(this.#lottoCount);
  }

  async getLotto() {
    this.#lottos = Lotto.getPurchaesdLotto(this.#lottoCount);
    this.#lottos.forEach((lotto) => OutputView.printMessage(lotto.convertNumbersToString()));
    OutputView.printNewLine();
  }

  async getWinningNumbers() {
    const winningNumbersInput = await InputView.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.#winningNumbers = Lotto.convertInputToNumbers(winningNumbersInput);
    OutputView.printNewLine();
  }
}

export default LottoController;
