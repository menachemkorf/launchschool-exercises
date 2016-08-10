class Scrabble
  def initialize(word)
    @letters = word.to_s.chars.map(&:upcase)
  end

  def score
    points = 0
    @letters.each do |letter|
      points += evaluate(letter)
    end
    points
  end

  def self.score(word)
    new(word).score
  end

  private

  def evaluate(letter)
    case letter
    when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'
      1
    when 'D', 'G'
      2
    when 'B', 'C', 'M', 'P'
      3
    when 'F', 'H', 'V', 'W', 'Y'
      4
    when 'K'
      5
    when 'J', 'X'
      8
    when 'Q', 'Z'
      10
    else
      0
    end
  end
end
