class Scrabble

  def initialize(word)
    @letters = word.to_s.chars.map(&:upcase)
  end

  def score
    points = 0
    @letters.each do |char|
      case char
      when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'
        points += 1
      when 'D', 'G'
        points += 2
      when 'B', 'C', 'M', 'P'
        points += 3
      when 'F', 'H', 'V', 'W', 'Y'
        points += 4
      when 'K'
        points += 5
      when 'J', 'X'
        points += 8
      when 'Q', 'Z'
        points += 10
      end
    end
    points
  end

  def self.score(word)
    new(word).score
  end
end

