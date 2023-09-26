import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
    ${chalk.bgBlue('Программа для подготовки данных для REST API сервера.')}
    Пример:
        ${chalk.bold('cli.js --<command> [--arguments]')}
    Команды:
        ${chalk.bold('--version:')}                   # выводит номер версии
        ${chalk.bold('--help:')}                      # печатает этот текст
        ${chalk.bold('--import')} ${chalk.green('<path>:')}             # импортирует данные из TSV
        ${chalk.bold('--generate')} ${chalk.red('<n>')} ${chalk.green('<path>:')} ${chalk.magenta('<url>')}  # генерирует произвольное количество тестовых данных
    `);
  }
}

